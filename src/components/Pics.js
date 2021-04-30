import React from "react";
import { ReactPictureGrid } from "react-picture-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";

// import Back from "../assets/back.jpg";
import SubHeader from "./SubHeader";
const useStyles = makeStyles((theme) => ({
}));

let data = [];
for (let i = 1; i < 15; i++) {
  data.push({
    image: `images/img${i}.jpeg`,
    title: `img${i}`,
    description: `img${i}`,
  });
}

// console.log(data);
const Pics = () => {
  const classes = useStyles();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   if (data.length < 5) {
  //     const img = lazy(() => import("../assets/img1.jpeg"));
  //     for (let i = 0; i < 3; i++) {
  //       setData([
  //         ...data,
  //         {
  //           image: img,
  //         },
  //       ]);
  //     }
  //     console.log(data);
  //   }
  // }, [data]);
  return (
    <Fragment>
      <SubHeader>My Life in Pictures</SubHeader>

      <ReactPictureGrid
        showPreview
        closeOnClick
        data={data}
        gap={20}
        backDropColor={"rgba(54, 86, 138, 0.5)"}
        // showTitle
        pattern={[
          "big",
          "small",
          "small",
          "tall",
          "tall",
          "tall",
          "small",
          "big",
          "small",
          "small",
          "tall",
          "tall",
          "big",
          "wide",
        ]}
      />
    </Fragment>
  );
};

export default Pics;
