export interface AccordionItemContent {
    value:       string;
    id:          string;
    title:       string;
    content:     string;
    code:        string[];
    subcontent: SubSection[];
}

export interface SubSection {
    id:       string;
    title:    string;
    content: string;
    examples: string[];
}

export interface Section {
	id: string;
	title: string;
	content: string;
	subcontent: SubSection[];
}