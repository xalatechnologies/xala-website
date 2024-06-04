import { ICaseStudy } from "../interfaces";
import Client from "./Client";
import Technology from "./Technology";
import Service from "./Service";
import Locale from "./Locale";

class CaseStudy implements ICaseStudy {
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  description: string;
  client: Client;
  url: string;
  platform: string;
  challenge: string;
  solution: string;
  features: Array<{ title: string; description: string }>;
  result: string;
  thumbnail: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
    hotspot?: boolean;
  };
  images: Array<{
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  }>;
  location: string;
  period: string;
  technologies: Technology[];
  services: Service[];
  locale: Locale;
  metaTitle: string;
  metaDescription: string;

  constructor(data: ICaseStudy) {
    this._id = data._id;
    this.title = data.title;
    this.slug = data.slug;
    this.description = data.description;
    this.client = new Client(data.client);
    this.url = data.url;
    this.platform = data.platform;
    this.challenge = data.challenge;
    this.solution = data.solution;
    this.features = data.features;
    this.result = data.result;
    this.thumbnail = data.thumbnail;
    this.images = data.images;
    this.location = data.location;
    this.period = data.period;
    this.technologies = data.technologies.map((t) => new Technology(t));
    this.services = data.services.map((s) => new Service(s));
    this.locale = new Locale(data.locale);
    this.metaTitle = data.metaTitle;
    this.metaDescription = data.metaDescription;
  }
}

export default CaseStudy;
