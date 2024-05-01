
import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Subsection } from "./SubSection";
import type {
  SubSection,
} from "@/content/typeInterfaces";
import type { CollectionEntry } from "astro:content";
interface Props {
  accordionItems: CollectionEntry<"HTML">[];
}

export function Section({ accordionItems }: Props) {
  return (

    <BaseAccordion type="single" collapsible>
      {
        accordionItems?.map((item, i) => (
          <AccordionItem value={item.data.value} key={`item-${i.toFixed()}`}>
            <AccordionTrigger>{item.data.title}</AccordionTrigger>
            <AccordionContent>
              {item.data.content}
              {item.data.subcontent?.map((subitem: SubSection, j) => (
                <Subsection
                  key={`item-${j.toFixed()}`}
                  title={subitem.title}
                  content={subitem.content}
                  examples={subitem.examples}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </BaseAccordion>
  );
}