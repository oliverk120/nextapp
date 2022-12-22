export interface Gift_List {
  title: string;
  source_url: string;
  source_name: string;
  source_logo_url: string;
  tags: string[];
  recipient: string;
  date: string;
  gifts: Gift[]
};

export interface Gift {
  name: string;
  image_url: string;
  brand: string;
  product_source_url: string;
  giftsource_url: string;
  description: string;
  price: string;
  source_info?: any;
}

/*
export interface Gift {
  id: number;
  name: string;
  image_url: string;
  type: string;
  recipient: string;
  brand: string;
  brandlogoUrl: string;
  description: string;
  package: string;
  price: string;
  pricetiers:{description: string; price: number};
  source_info: ExternalGiftList;
}

export interface ExternalGiftList {
  title:string;
  source_url: string;
  source_name: string;
  source_logo_url: string;
  tags: string[];
  recipient:string;
  date: string;
  gifts:any;
}

*/