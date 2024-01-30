import { getTeachers } from '@/prisma/db-calls';
import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { upperFirst } from '@/lib/utils';
import prisma from '@/prisma/prismaClient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

const getPopularSubject = async () => {
  type QueryResult = {
    subject: string;
    max_subject_count: number;
  };
  const result: QueryResult[] =
    await prisma.$queryRaw`SELECT subject, MAX(count) AS max_subject_count FROM (
    SELECT subject, COUNT(subject) AS count FROM "Teacher" GROUP BY subject

  ) AS max GROUP BY subject`;

  return result[0].subject;
};

async function TeachersOverview() {
  const session = await getServerSession(authOptions);
  if (!session) redirect(`/api/auth/signin`);

  const teachers = await getTeachers(session.user.id);

  const popularSubject = await getPopularSubject();
  // const isPro = session && subscription;

  // if (teachers && isPro)

  return (
    <Section className="space-y-4" title="Teachers Overview">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teachers.length}</div>
            <p className="text-xs text-muted-foreground"></p>
          </CardContent>
        </Card>
        {popularSubject && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Popular Subject
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {upperFirst(popularSubject)}
              </div>
              <p className="text-xs text-muted-foreground"></p>
            </CardContent>
          </Card>
        )}
      </div>
    </Section>
  );
}

export default TeachersOverview;
