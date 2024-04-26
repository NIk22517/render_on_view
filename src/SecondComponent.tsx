import { UserLoader } from "./Loader";
import { GetUsers } from "./apiCalls";

const CommonComponent = ({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
      }}
    >
      <h3>{text}</h3>
      <h3>{subText}</h3>
    </div>
  );
};

const SecondComponent = () => {
  const { data, isLoading } = GetUsers();
  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {isLoading ? (
        <UserLoader />
      ) : (
        <>
          {data?.length !== 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.5rem",
              }}
            >
              {data?.map((user) => {
                return (
                  <div
                    key={user.id}
                    style={{
                      border: "1px solid grey",
                      padding: "1rem",
                    }}
                  >
                    <CommonComponent text="Name:" subText={user.name} />
                    <CommonComponent
                      text="User Name:"
                      subText={user.username}
                    />
                    <CommonComponent text="Email:" subText={user.email} />
                    <CommonComponent text="Phone No:" subText={user.phone} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h3>No Data Found</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SecondComponent;
