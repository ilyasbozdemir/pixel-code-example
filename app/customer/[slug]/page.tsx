import React from "react";

export default function CustomerDetail({
  params,
}: {
  params: { slug: string };
}) {
  return <div>customer id: {params.slug}</div>;
}
