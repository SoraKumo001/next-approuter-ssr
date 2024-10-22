"use client";
import { SSRHead, useSSR } from "next-ssr";
import Link from "next/link";

interface Center {
  name: string;
  enName: string;
  officeName?: string;
  children?: string[];
  parent?: string;
  kana?: string;
}
interface Centers {
  [key: string]: Center;
}

const fetchCenters = (): Promise<Centers> =>
  fetch(`https://www.jma.go.jp/bosai/common/const/area.json`).then((r) =>
    r.json()
  );

const Page = () => {
  const { data } = useSSR<Centers>(fetchCenters, { key: "centers" });
  if (!data) return <div>loading</div>;
  return (
    <>
      <SSRHead>
        <title>天気予報地域一覧</title>
      </SSRHead>
      <div>
        {data &&
          Object.entries(data.offices).map(([code, { name }]) => (
            <div key={code}>
              <Link href={`/weather/${code}`}>{name}</Link>
            </div>
          ))}
      </div>
    </>
  );
};
export default Page;
