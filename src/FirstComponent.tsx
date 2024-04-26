import { LoaderPost } from "./Loader";
import { GetPosts } from "./apiCalls";

const FirstComponent = () => {
  const { data, isLoading } = GetPosts();

  console.log(data, "data");

  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {isLoading ? (
        Array.from({ length: 5 }, (v, i) => {
          return <LoaderPost key={i} />;
        })
      ) : (
        <>
          {data?.length !== 0 ? (
            <>
              {data?.map((post) => {
                return (
                  <div
                    key={post.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <h3>{post.id}</h3>
                    <h6>{post.title}</h6>
                    <h6>{post.body}</h6>
                  </div>
                );
              })}
            </>
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

export default FirstComponent;
