import { format } from "date-fns";
import { getOrganizationsByUser } from "../queries/get-organizations-by-user";

const OrganizationList = async () => {
  const organizations = await getOrganizationsByUser();

  return (
    <div className="animate-fade-from-top">
      {organizations.map((organization) => (
        <div key={organization.id}>
          <div>Name: {organization.name}</div>
          <div>
            Joined at:{" "}
            {format(
              organization.membershipByUser?.joinedAt,
              "yyyy-MM-dd, HH:mm"
            )}
          </div>
          <div>Memberships: {organization._count.memberships}</div>
        </div>
      ))}
    </div>
  );
};

export { OrganizationList };
