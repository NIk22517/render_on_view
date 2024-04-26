export const LoaderPost = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        className={"skeleton"}
        style={{
          width: "5vw",
          height: "2vh",
        }}
      />
      <div
        className={"skeleton"}
        style={{
          width: "20vw",
          height: "2vh",
        }}
      />
      <div
        className={"skeleton"}
        style={{
          width: "30vw",
          height: "2vh",
        }}
      />
    </div>
  );
};

export const UserLoader = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.5rem",
      }}
    >
      {Array.from({ length: 12 }, (v, i) => {
        return (
          <div
            key={i}
            style={{
              border: "1px solid grey",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div
              className={"skeleton"}
              style={{
                width: "5vw",
                height: "2vh",
              }}
            />
            <div
              className={"skeleton"}
              style={{
                width: "20vw",
                height: "2vh",
              }}
            />
            <div
              className={"skeleton"}
              style={{
                width: "30vw",
                height: "2vh",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const PhotoLoader = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.5rem",
      }}
    >
      {Array.from({ length: 12 }, (v, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid grey",
              padding: "0.5rem",
              gap: "0.5rem",
            }}
          >
            <div
              className={"skeleton"}
              style={{
                width: "10vw",
                height: "2vh",
              }}
            />
            <div
              className={"skeleton"}
              style={{
                width: "20vw",
                height: "20vh",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
