import categoriesService from "@/src/services/categoriesService";
import styles from "../../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import SlideComponent from "@/src/components/common/slideComponent";
import PageSpinner from "@/src/components/common/spinner";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );
  if (error) return error;
  if (!data) {
    return <PageSpinner />;
  }
  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
  );
};

export default ListCategoriesSlide;
