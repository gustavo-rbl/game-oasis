import { TagsTypes } from "../../types/types";
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";

function Tags({ tags }: TagsTypes) {
  return (
    <>
      <HeadingSecondary text="Tags:" />

      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Tags;
