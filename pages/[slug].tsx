import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { card } = router.query;

  return (
    <>
      <div>{card}</div>
    </>
  );
};
export default UserDetail;
