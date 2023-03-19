export default function ListItem(props) {
  return (
    <li>
      <a href={props.url} target="_blank" rel="noreferrer" title={props.title}>
        <img src={props.ImageUrl} alt={props.alt} />
      </a>
    </li>
  );
};
