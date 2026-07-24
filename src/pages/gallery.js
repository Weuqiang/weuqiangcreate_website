import PhotoAlbum from "react-photo-album";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React, { useState, useMemo, createContext, useContext, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import styles from "./gallery.module.css";

const unsplashPhotos = [
  { id: "2021072", width: 1080, height: 1077, title: "广东", description: "塘朗山的花" },
  { id: "2021073", width: 4032, height: 3024, title: "广东", description: "塘朗山的山顶" },
  { id: "2021076", width: 4524, height: 2112, title: "广东", description: "东宝大厦的双彩虹" },
  { id: "2021077", width: 1920, height: 923, title: "广东", description: "深圳的主干道" },
  { id: "2021079", width: 1440, height: 1080, title: "广东", description: "南山区的堡垒云" },
  { id: "2022081", width: 1422, height: 799, title: "上海", description: "上海白天的月亮" },
  { id: "2022082", width: 2738, height: 1280, title: "上海", description: "全景下红蓝分裂的天空" },
  { id: "2022083", width: 1664, height: 935, title: "上海", description: "上海的晚霞" },
  { id: "2022084", width: 1664, height: 935, title: "上海", description: "上海的公园" },
  { id: "20230705092938", width: 1920, height: 1080, title: "甘肃", description: "中山桥" },
  { id: "20230705092949", width: 3188, height: 1792, title: "上海", description: "上海金色的晚霞" },
  { id: "20230705093600", width: 2268, height: 1168, title: "浙江", description: "嵊泗岛的路牌" },
  { id: "20230705093711", width: 4032, height: 2268, title: "浙江", description: "嵊泗岛的晚霞" },
  { id: "20230705093721", width: 4032, height: 2268, title: "浙江", description: "嵊泗岛的渔场" },
  { id: "20230705094040", width: 3979, height: 2236, title: "浙江", description: "嵊泗岛的清晨" },
  { id: "20230705094050", width: 1080, height: 607, title: "浙江", description: "嵊泗岛的绿野仙踪" },
  { id: "202308171", width: 1664, height: 935, title: "江苏", description: "苏州金鸡湖" },
  { id: "ForestPark1", width: 1080, height: 1080, title: "上海", description: "共青公园" },
  { id: "ForestPark3", width: 1920, height: 1080, title: "上海", description: "共青公园" },
  { id: "ForestPark4", width: 1918, height: 1080, title: "上海", description: "共青公园" },
  { id: "ForestPark5", width: 1706, height: 960, title: "上海", description: "共青公园" },
  { id: "ForestPark6", width: 1920, height: 1080, title: "上海", description: "共青公园" },
  { id: "ForestPark7", width: 1920, height: 1080, title: "上海", description: "共青公园" },
  { id: "nanxiangtown3", width: 3676, height: 2070, title: "上海", description: "南翔古镇" },
  { id: "20240531110829", width: 1664, height: 935, title: "山东", description: "青岛的夏天" },
  { id: "20240531110834", width: 1664, height: 935, title: "山东", description: "青岛的夏天" },
  { id: "20240531110910", width: 1664, height: 935, title: "山东", description: "青岛的夏天" },
  { id: "20240531111017", width: 1664, height: 935, title: "山东", description: "青岛的夏天" },
];

const uniqueTitlesSet = new Set(unsplashPhotos.map((photo) => photo.title)).add("全选");
const extractedData = Array.from(uniqueTitlesSet).map((title) => ({
  value: title || "其他",
  title: title || "其他",
}));

export const SettingsContext = createContext(null);
export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within a SettingsContext");
  return context;
}

function Settings({ children }) {
  const [layout, setLayout] = useState("columns");
  const [count, setCount] = useState(unsplashPhotos.length);
  const [targetRowHeight, setTargetRowHeight] = useState(200);
  const [columns, setColumns] = useState(5);
  const [spacing, setSpacing] = useState(30);
  const [padding, setPadding] = useState(30);
  const [width, setWidth] = useState(95);
  const [tag, settag] = useState("全选");

  useEffect(() => {
    const viewportSize = window.innerWidth;
    setColumns(viewportSize < 480 ? 2 : viewportSize < 900 ? 3 : 5);
    setSpacing(viewportSize < 480 ? 5 : viewportSize < 900 ? 10 : 20);
    setPadding(viewportSize < 480 ? 5 : viewportSize < 900 ? 10 : 20);
    setTargetRowHeight(viewportSize < 480 ? 100 : viewportSize < 900 ? 150 : 200);
  }, []);

  const settings = useMemo(() => ({
    rawPhotos:
      tag === "其他"
        ? unsplashPhotos.filter((p) => p.title === undefined || p.title === null).slice(0, count)
        : tag === "全选"
          ? unsplashPhotos.slice(0, count)
          : unsplashPhotos.filter((p) => p.title === tag).slice(0, count),
    layout, targetRowHeight, columns, spacing, padding, width,
  }), [layout, count, targetRowHeight, columns, spacing, padding, width, tag]);

  return (
    <SettingsContext.Provider value={settings}>
      <div className={styles.panel}>
        <div className={styles.filterRow}>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel} htmlFor="layout-select">布局</label>
            <select id="layout-select" className={styles.select} value={layout}
              onChange={(event) => setLayout(event.target.value)}>
              {[{ value: "rows", title: "按行" }, { value: "columns", title: "按列" }, { value: "masonry", title: "动态" }].map(({ value, title }) => (
                <option key={value} value={value}>{title}</option>
              ))}
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel} htmlFor="tag-select">城市</label>
            <select id="tag-select" className={styles.select} value={tag}
              onChange={(event) => settag(event.target.value)}>
              {extractedData.map(({ value, title }) => (
                <option key={value} value={value}>{title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {children}
    </SettingsContext.Provider>
  );
}

function Playground() {
  const { rawPhotos, layout, columns, targetRowHeight, spacing, padding, width } = useSettings();
  const [index, setIndex] = useState(-1);
  // 用 useBaseUrl 拼 baseUrl 前缀，production 下图片指向 /weuqiangcreate_website/pages/gallery/...
  const baseUrl = useBaseUrl("/");
  const photos = useMemo(
    () => rawPhotos.map((photo) => ({
      src: `${baseUrl}pages/gallery/${photo.id}-${photo.width}-${photo.height}.webp`,
      width: photo.width,
      height: photo.height,
      title: photo.title,
      description: (photo.description || "") + `\n${photo.width} x ${photo.height}`,
    })),
    [rawPhotos, baseUrl]
  );

  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, ...rest } }) => (
      <img alt={alt} style={{
        ...style,
        borderRadius: padding > 2 ? "4px" : 0,
        boxShadow: spacing > 0
          ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
          : "none",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }} {...rest} />
    ),
    [spacing, padding]
  );

  return (
    <div className={styles.albumWrap} style={{ width: `${width}%` }}>
      <PhotoAlbum
        photos={photos}
        layout={layout}
        columns={columns}
        spacing={spacing}
        padding={padding}
        targetRowHeight={targetRowHeight}
        renderPhoto={renderPhoto}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
      />
    </div>
  );
}

function GalleryContent() {
  return (
    <>
      <header className={styles.pageHeader}>
        <span className={styles.pageEyebrow}>影像</span>
        <h1 className={styles.pageTitle}>相册</h1>
        <p className={styles.pageLead}>
          旅途与日常的光影记录。按城市筛选，按行/按列/动态三种布局切换。
        </p>
      </header>
      <Settings>
        <Playground />
      </Settings>
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <GalleryContent />
    </Layout>
  );
}