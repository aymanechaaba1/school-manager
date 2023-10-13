# School Manager

## Brief

This is a school management web app where teacher (admin) manage their students and their monthly recurring payments.

## Features list

- Admin can create, update, or delete a student.
- Admin can filter students by their age, registration_date, grade
- Admin can sort students by registration_date, age, grade
- Admin can search students by their name
- Admin can contact their parents

## ERD

![ERD](https://asana-user-private-us-east-1.s3.amazonaws.com/assets/1205415844296691/1205707870019584/c079e642ec9b477b6c015dcf3cf065a5?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCaLEbBeR3Efa5qqLNFiNoUOaApwmnDmsuJdLHlemeXGAIgR03bjDZxEG1DqRHrfDeKz59MQt2xsdajZL7%2FRtBxnXAqsgUIExAAGgw0MDM0ODM0NDY4NDAiDKvuYojYPwRHIwh7ySqPBXClO1xRXnuWgeA9Gu1b7likv6NYrshdGspmkwnA8lollg4%2FnSRtv0TlfedfoA9u6n%2BLXZgM51BsZxdZi%2Fd%2BVGRGtH5bFPm1a8fW4aTrJp%2FJI7njm4tMGdM4jGNQlWF58QRCKiXw%2FY0OtYuEL3tdY8mMOPmDLnztNCGkz2jMPEkCgSPqhIdebG9uD8UZdjv%2FOVuPgmIH%2FcNAPJUJiumS47jXAB5DlN7oAYVu%2BCzi6lBWB3EBYNp12l7EvLJ1JX5R8qdQVI64COHJwOVioyK7xeZwX6q4GOG495u9WZdBBtqcwAnkXCiiOdMdTqxZAf0WC3JPE9kbGQuH3Gsk9z8wPZAawy%2Bor4uHB7cMN8Cf6JBLWKGHldxEA0Gd06IK2joLBZ1BdhmZZuPZjTSRfIvk9z8eKyJcs2gbzfacoioUJwGxpsPgkkk09IaS2xq7MJDhyq0uuY0CLUfjBKIOlgRamRA3WmNvhErJWzSs%2BgWuJVJzbBH8tWXLcl7VxTVPSPccdKa5DNpUEAwpFhofYTH2i57xHeaZIZl%2BFk8qX5WDiONYEvaXcPqG9hp3ioVXm7mdbPPSesNlbnQo%2FJd289F5kNtDXhuSZSmdcAlGMH%2BZIWfJYmngcmTkY1uYHDahkoiq4qDFKWpz17f3%2FM4e3DaYfSAQ7eQTLvRuyMg%2FbGuvdTiqgagFXJfbthFu20wky5GT1vxAuhw%2Bvqet6DIhS%2B1DKjQxNB33JbWNDsENCeCG8FtpTAluPnlqXROrcgDCgW1PP68PwEH9dOV4PNDYtiQNHkP8OVMPEt6QVzY4dZzBY0t2IWJV7jiu%2BfCoXpQWnlPTPJ6Xuuq5KkZVszpu1115zAH33kTeLZAcm8cJldx6Y68wnI2fqQY6sQFOzw%2BEzvj8oCQJVrSbwNxrk6gMCcuvWPguqAZJ3oFey2GnfI5ftzy5h30eNirmh2BpHk6VLZjROnBEulk1lor%2F9EFKsEWn0yl%2FNqlZ3cHyGOs9QQYnHoytSX4PGcQysxsqyM1eDbTNGfDY7ybwpmVI%2BpHxIIBZLa6QEGmuPXd7TdfbLmBm65DDncagKQu9nLsRpwzDUsvBlqFNO1tWQPhysQAiyNGIhC2PGwrDOFPLxwc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231012T111552Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=ASIAV34L4ZY4HB23NRHE%2F20231012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2333781600f32729469b82d582c28aa9c70b1cfedd641b5c4b69b6e0f3880d2e#_=_)

## Stack List & Tools

![Stack List](https://asana-user-private-us-east-1.s3.amazonaws.com/assets/1205415844296691/1205708153499409/ec487fd9f9475b778380d2a41a6b84b4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCaLEbBeR3Efa5qqLNFiNoUOaApwmnDmsuJdLHlemeXGAIgR03bjDZxEG1DqRHrfDeKz59MQt2xsdajZL7%2FRtBxnXAqsgUIExAAGgw0MDM0ODM0NDY4NDAiDKvuYojYPwRHIwh7ySqPBXClO1xRXnuWgeA9Gu1b7likv6NYrshdGspmkwnA8lollg4%2FnSRtv0TlfedfoA9u6n%2BLXZgM51BsZxdZi%2Fd%2BVGRGtH5bFPm1a8fW4aTrJp%2FJI7njm4tMGdM4jGNQlWF58QRCKiXw%2FY0OtYuEL3tdY8mMOPmDLnztNCGkz2jMPEkCgSPqhIdebG9uD8UZdjv%2FOVuPgmIH%2FcNAPJUJiumS47jXAB5DlN7oAYVu%2BCzi6lBWB3EBYNp12l7EvLJ1JX5R8qdQVI64COHJwOVioyK7xeZwX6q4GOG495u9WZdBBtqcwAnkXCiiOdMdTqxZAf0WC3JPE9kbGQuH3Gsk9z8wPZAawy%2Bor4uHB7cMN8Cf6JBLWKGHldxEA0Gd06IK2joLBZ1BdhmZZuPZjTSRfIvk9z8eKyJcs2gbzfacoioUJwGxpsPgkkk09IaS2xq7MJDhyq0uuY0CLUfjBKIOlgRamRA3WmNvhErJWzSs%2BgWuJVJzbBH8tWXLcl7VxTVPSPccdKa5DNpUEAwpFhofYTH2i57xHeaZIZl%2BFk8qX5WDiONYEvaXcPqG9hp3ioVXm7mdbPPSesNlbnQo%2FJd289F5kNtDXhuSZSmdcAlGMH%2BZIWfJYmngcmTkY1uYHDahkoiq4qDFKWpz17f3%2FM4e3DaYfSAQ7eQTLvRuyMg%2FbGuvdTiqgagFXJfbthFu20wky5GT1vxAuhw%2Bvqet6DIhS%2B1DKjQxNB33JbWNDsENCeCG8FtpTAluPnlqXROrcgDCgW1PP68PwEH9dOV4PNDYtiQNHkP8OVMPEt6QVzY4dZzBY0t2IWJV7jiu%2BfCoXpQWnlPTPJ6Xuuq5KkZVszpu1115zAH33kTeLZAcm8cJldx6Y68wnI2fqQY6sQFOzw%2BEzvj8oCQJVrSbwNxrk6gMCcuvWPguqAZJ3oFey2GnfI5ftzy5h30eNirmh2BpHk6VLZjROnBEulk1lor%2F9EFKsEWn0yl%2FNqlZ3cHyGOs9QQYnHoytSX4PGcQysxsqyM1eDbTNGfDY7ybwpmVI%2BpHxIIBZLa6QEGmuPXd7TdfbLmBm65DDncagKQu9nLsRpwzDUsvBlqFNO1tWQPhysQAiyNGIhC2PGwrDOFPLxwc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231012T111241Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Credential=ASIAV34L4ZY4HB23NRHE%2F20231012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0fc835e225d82352166d3859853652d6a4f0acebc257fcd662a6429df7af67d3#_=_)

## API

### Endpoints

**Admins**

- /getAdmins
- /getAdmin/:admin_id
- /addAdmin
- /deleteAdmin/:admin_id
- /editAdmin/:admin_id
- /getStudents/:admin_id

**Students**

- /getStudents
- /getStudent/:student_id
- /addStudent
- /deleteStudent/:student_id
- /editStudent/:student_id
- /getSubscription/:student_id

**Subscriptions**

- /getSubscriptions
- /getSubscription/:subscription_id
- /addSubscription
- /deleteSubscription/:subscription_id
- /editSubscription/:subscription_id
- /getPayments/:subscription_id

**Payments**

- /getPayments
- /getPayment
- /addPayment
- /deletePayment
- /editPayment
- /getSubscription/:subscription_id

### Setup tRPC

```html
<code
  >npm i <span class="bg-pink-200">@trpc/client</span> @trpc/server
  @trpc/react-query @tanstack/react-query</code
>
```
