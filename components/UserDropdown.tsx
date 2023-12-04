'use client';

import { CreditCard, LogOut, Settings, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from './UserAvatar';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSubscriptionsStore } from '@/store/store';
import Link from 'next/link';
import { useState } from 'react';

export function UserDropdown() {
  const { data: session } = useSession();
  const subscription = useSubscriptionsStore((state) => state.subscription);

  const [openDropdown, setOpenDropdown] = useState(false);

  return session ? (
    <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
        {subscription && (
          <div className="font-bold text-white rounded-sm py-1 px-3 text-xs bg-gradient-to-r from-[#5C258D] to-[#4389A2]">
            PRO Member
          </div>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link href={`/profile`}>Profile</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link
              onClick={() => {
                setOpenDropdown(false);
              }}
              href={'/settings/plan'}
            >
              Settings
            </Link>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      onClick={() => {
        signIn();
      }}
    >
      Sign In
    </Button>
  );
}
