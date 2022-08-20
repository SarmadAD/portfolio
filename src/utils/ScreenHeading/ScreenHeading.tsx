import "./ScreenHeading.css";

interface Props {
  title: string;
  subHeading: string;
}

export default function ScreenHeading({ title, subHeading }: Props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{title}</span>
      </div>
      {subHeading ? (
        <div className="screen-sub-heading">
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line">
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
