
interface Props {
  title: string;
  content: string;
  examples: Array<string>;
}


export function Subsection({ content, title, examples }: Props) {
  return (
    <section className="ml-4 mb-2">
      <h3 className="font-bold mt-4 mb-2">{ title }</h3>
      <p>{ content }</p>
      <ul className="mb-8 list-disc pl-4 ml-2">
        {examples?.map((item, i) => <li className="my-2" key={`item-${i.toFixed()}`}>{item}</li>)}
      </ul>
    </section>
  );
}