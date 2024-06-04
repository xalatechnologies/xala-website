"use client";

import { urlFor } from "@/lib/sanity";
import router from "next/router";
import Image from "next/image";
import { ICaseStudy } from "@/lib/interfaces";

const CaseStudyCard = ({ item }: { item: ICaseStudy }) => {
  return (
    <div key={item._id} className="case-study">
      {item.thumbnail && (
        <Image
          src={urlFor(item.thumbnail).url()}
          alt={item.client.name}
          width={100}
          height={100} />
      )}
    <h3>{item.title}</h3>
    <p>{item.client.name}</p>
    <button onClick={() => router.push(`/case-studies/${item.slug.current}`)}>
      Read More
    </button>
  </div>
  )
};

export default CaseStudyCard;
