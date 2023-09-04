import { TagsTypes } from "../../types/types";
import HeadingPrimary from "../HeadingPrimary/HeadingPrimary";

// style
import globalStyle from "../../style/global/Global.module.scss";

function Tags({ tags }: TagsTypes) {
  return (
    <>
      <HeadingPrimary text="Tags:" />

      <ul className={globalStyle.list_buttons}>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Tags;
