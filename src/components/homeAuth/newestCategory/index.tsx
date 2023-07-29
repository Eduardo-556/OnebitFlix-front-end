import courseService from "@/src/services/courseService";
import useSWR from "swr";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";

const NewestCategory = function () {
  const { data, error } = useSWR("/neweste", courseService.getNewestCourses);

  if (error) return error;
  if (!data) return <> Loading...</>;
  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default NewestCategory;
