import Box from "@mui/material/Box";
import PhotoAlbum from "react-photo-album";
import Layout from "@theme/Layout";
import React, {
  useState,
  useMemo,
  createContext,
  useContext,
  useEffect,
} from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
//定义图片路径
const unsplashLink = (id, width, height) =>
  `/pages/gallery/${id}-${width}-${height}.webp`;
//定义相册图片
const unsplashPhotos = [
  {
    id: 202412151,
    width: 4624,
    height: 2080,
    title: "广东",
    description: "仙湖植物园的绿地"
  },
  {
    id: 202412152,
    width: 2160,
    height: 5044,
    title: "上海",
    description: "古猗园的莲花"
  },
  {
    id: 202412153,
    width: 2160,
    height: 5044,
    title: "浙江",
    description: "端午节的天一阁"
  },
  {
    id: 202412155,
    width: 1706,
    height: 1279,
    title: "山东",
    description: "趵突泉的正面"
  },
  {
    id: 202412157,
    width: 2160,
    height: 5070,
    title: "上海",
    description: "青浦区的道路"
  },
  {
    id: 202412158,
    width: 2080,
    height: 2080,
    title: "广东",
    description: "仙湖植物园的大树"
  },
  {
    id: "2021072",
    width: 1080,
    height: 1077,
    title: "广东",
    description: "塘朗山的花",
  },
  {
    id: "2021073",
    width: 4032,
    height: 3024,
    title: "广东",
    description: "塘朗山的山顶",
  },
  {
    id: "2021074",
    width: 4032,
    height: 3024,
    title: "广东",
    description: "塘朗山的亭子",
  },
  {
    id: "2021075",
    width: 3464,
    height: 3464,
    title: "广东",
    description: "塘朗山的栈道",
  },
  {
    id: "2021076",
    width: 4524,
    height: 2112,
    title: "广东",
    description: "东宝大厦的双彩虹",
  },
  {
    id: "2021077",
    width: 1920,
    height: 923,
    title: "广东",
    description: "深圳的主干道",
  },
  {
    id: "2021078",
    width: 5792,
    height: 4344,
    title: "上海",
    description: "上海的鱼鳞云",
  },
  {
    id: "2021079",
    width: 1440,
    height: 1080,
    title: "广东",
    description: "南山区的堡垒云",
  },
  {
    id: "2022081",
    width: 1422,
    height: 799,
    title: "上海",
    description: "上海白天的月亮",
  },
  {
    id: "2022082",
    width: 2738,
    height: 1280,
    title: "上海",
    description: "全景下红蓝分裂的天空",
  },
  {
    id: "2022083",
    width: 1664,
    height: 935,
    title: "上海",
    description: "上海的晚霞",
  },
  {
    id: "2022084",
    width: 1664,
    height: 935,
    title: "上海",
    description: "上海的公园",
  },
  {
    id: "20230705092938",
    width: 1920,
    height: 1080,
    title: "甘肃",
    description: "中山桥",
  },
  {
    id: "20230705092949",
    width: 3188,
    height: 1792,
    title: "上海",
    description: "上海金色的晚霞",
  },
  {
    id: "20230705093600",
    width: 2268,
    height: 1168,
    title: "浙江",
    description: "嵊泗岛的路牌",
  },
  {
    id: "20230705093711",
    width: 4032,
    height: 2268,
    title: "浙江",
    description: "嵊泗岛的晚霞",
  },
  {
    id: "20230705093721",
    width: 4032,
    height: 2268,
    title: "浙江",
    description: "嵊泗岛的渔场",
  },
  {
    id: "20230705094040",
    width: 3979,
    height: 2236,
    title: "浙江",
    description: "嵊泗岛的清晨",
  },
  {
    id: "20230705094046",
    width: 2160,
    height: 2430,
    title: "浙江",
    description: "嵊泗岛的民宿",
  },
  {
    id: "20230705094050",
    width: 1080,
    height: 607,
    title: "浙江",
    description: "嵊泗岛的绿野仙踪",
  },
  {
    id: "2023071",
    width: 2268,
    height: 4032,
    title: "上海",
    description: "佘山的塔",
  },
  {
    id: "202308171",
    width: 1664,
    height: 935,
    title: "江苏",
    description: "苏州金鸡湖",
  },
  {
    id: "ForestPark1",
    width: 1080,
    height: 1080,
    title: "上海",
    description: "共青公园",
  },
  {
    id: "ForestPark3",
    width: 1920,
    height: 1080,
    title: "上海",
    description: "共青公园",
  },
  {
    id: "ForestPark4",
    width: 1918,
    height: 1080,
    title: "上海",
    description: "共青公园",
  },
  {
    id: "ForestPark5",
    width: 1706,
    height: 960,
    title: "上海",
    description: "共青公园",
  },
  {
    id: "ForestPark6",
    width: 1920,
    height: 1080,
    title: "上海",
    description: "共青公园",
  },
  {
    id: "ForestPark7",
    width: 1920,
    height: 1080,
    title: "上海",
    description: "共青公园",
  },
  {
    id: "nanxiangtown1",
    width: 4032,
    height: 2268,
    title: "上海",
    description: "南翔古镇",
  },
  {
    id: "nanxiangtown2",
    width: 4032,
    height: 2268,
    title: "上海",
    description: "南翔古镇",
  },
  {
    id: "nanxiangtown3",
    width: 3676,
    height: 2070,
    title: "上海",
    description: "南翔古镇",
  },
  {
    id: "nanxiangtown4",
    width: 4032,
    height: 2268,
    title: "上海",
    description: "南翔古镇",
  },
  {
    id: "20240531110829",
    width: 1664,
    height: 935,
    title: "山东",
    description: "青岛的夏天",
  },
  {
    id: "20240531110834",
    width: 1664,
    height: 935,
    title: "山东",
    description: "青岛的夏天",
  },
  {
    id: "20240531110910",
    width: 1664,
    height: 935,
    title: "山东",
    description: "青岛的夏天",
  },
  {
    id: "20240531111017",
    width: 1664,
    height: 935,
    title: "山东",
    description: "青岛的夏天",
  },
];

// 使用 Set 进行自动去重，自动添加一个全选选项
const uniqueTitlesSet = new Set(unsplashPhotos.map((photo) => photo.title)).add(
  "全选"
);

// 提取相册标签
const extractedData = Array.from(uniqueTitlesSet).map((title) => ({
  value: title || "其他",
  title: title || "其他",
}));

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  title: photo.title,
  description: (photo.description || "") + `\n${photo.width} x ${photo.height}`,
}));

const useLayoutEffect = typeof document !== "undefined" ? useEffect : useEffect;

function Filter({ children }) {
  return (
    <Grid item xs={12} sm={8} lg={6}>
      {children}
    </Grid>
  );
}

function SliderControl({ name, min, max, step, value, onChange, disabled, colorMode }) {
  const [focused, setFocused] = useState(false);
  const darkTheme = colorMode === "dark" ? "secondary" : "primary";
  return (
    <FormControl margin="none" fullWidth>
      <InputLabel shrink variant="standard" focused={focused}>
        {name}
      </InputLabel>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        size="small"
        color={darkTheme}
        valueLabelDisplay="auto"
        marks={[
          { value: min, label: `${min}` },
          { value: max, label: `${max}` },
        ]}
        onChange={(e, value, activeThumb) =>
          onChange(e, typeof value === "number" ? value : value[0], activeThumb)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        sx={{ mt: 2 }}
      />
    </FormControl>
  );
}

export const SettingsContext = createContext(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettings must be used within a SettingsContext");
  return context;
}

function Settings({ children }) {
  const [layout, setLayout] = useState("columns");
  const [count, setCount] = useState(photos.length);
  const [targetRowHeight, setTargetRowHeight] = useState(200);
  const [columns, setColumns] = useState(5);
  const [spacing, setSpacing] = useState(30);
  const [padding, setPadding] = useState(30);
  const [width, setWidth] = useState(95);
  const [tag, settag] = useState("全选");

  useLayoutEffect(() => {
    const viewportSize = window.innerWidth;
    setColumns(viewportSize < 480 ? 2 : viewportSize < 900 ? 3 : 5);
    setSpacing(viewportSize < 480 ? 5 : viewportSize < 900 ? 10 : 20);
    setPadding(viewportSize < 480 ? 5 : viewportSize < 900 ? 10 : 20);
    setTargetRowHeight(
      viewportSize < 480 ? 100 : viewportSize < 900 ? 150 : 200
    );
  }, []);

  const settings = useMemo(
    () => ({
      photos:
        tag === "其他"
          ? photos
            .filter(
              (photo) => photo.title === undefined || photo.title === null
            )
            .slice(0, count)
          : tag === "全选"
            ? photos.slice(0, count)
            : photos.filter((photo) => photo.title === tag).slice(0, count),
      layout,
      targetRowHeight,
      columns,
      spacing,
      padding,
      width,
    }),
    [layout, count, targetRowHeight, columns, spacing, padding, width, tag]
  );

  return (
    <SettingsContext.Provider value={settings}>
      <Paper
        variant="outlined"
        sx={{ mb: 4, p: 2, textAlign: "left" }}
      >
        <Grid container columns={24} rowSpacing={2} columnSpacing={4}>
          <Filter>
            <TextField
              select
              fullWidth
              label="布局"
              variant="standard"
              margin="none"
              value={layout}
              color="primary"
              onChange={(event) => setLayout(event.target.value)}
            >
              {[
                { value: "rows", title: "按行" },
                { value: "columns", title: "按列" },
                { value: "masonry", title: "动态" },
              ].map(({ value, title }) => (
                <MenuItem key={value} value={value}>
                  {title}
                </MenuItem>
              ))}
            </TextField>
          </Filter>
          <Filter>
            <TextField
              select
              fullWidth
              label="城市"
              variant="standard"
              margin="none"
              value={tag}
              color="primary"
              onChange={(event) => settag(event.target.value)}
            >
              {extractedData.map(({ value, title }) => (
                <MenuItem key={value} value={value}>
                  {title}
                </MenuItem>
              ))}
            </TextField>
          </Filter>
        </Grid>
      </Paper>

      {children}
    </SettingsContext.Provider>
  );
}

function Playground() {
  const { photos, layout, columns, targetRowHeight, spacing, padding, width } =
    useSettings();
  const [index, setIndex] = useState(-1);
  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, ...rest } }) => (
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: padding > 2 ? "4px" : 0,
          boxShadow:
            spacing > 0
              ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
              : "none",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        {...rest}
      />
    ),
    [spacing, padding]
  );

  return (
    <Box sx={{ width: `${width}%`, mx: "auto" }}>
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
    </Box>
  );
}

function GalleryContent() {
  const colorMode = useColorMode().colorMode;
  const theme = useMemo(() => createTheme({
    palette: { mode: colorMode === "dark" ? "dark" : "light" },
  }), [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <Settings>
        <Playground />
      </Settings>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Layout>
      <GalleryContent />
    </Layout>
  );
}

