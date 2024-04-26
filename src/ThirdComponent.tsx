import { PhotoLoader } from "./Loader";
import { GetPhotos } from "./apiCalls";

const ThirdComponent = () => {
  const { data, isLoading } = GetPhotos();

  console.log(data, "datadata");

  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {isLoading ? (
        <PhotoLoader />
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
              {data?.map((photo) => {
                return (
                  <div
                    key={photo.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: "1px solid grey",
                      padding: "0.5rem",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {photo.title}
                    </h3>

                    <img
                      src={photo.thumbnailUrl}
                      alt="url"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
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

export default ThirdComponent;
