import { logsColors } from "@/lib/logs";
import { months } from "@/lib/dates";
import { cn } from "@/lib/utils";
import React, { SVGProps } from "react";

const CheckboxSVG = (props: SVGProps<SVGSVGElement> & { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        stroke="#0F172A"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2.087 2.45v15.587m-.362-.363h17.037M19.124 1v16.312M1 2.087h18.487"
      />
    </svg>
  );
};

const CheckboxMarkSVG = (
  props: SVGProps<SVGSVGElement> & { color?: string }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 22 18"
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M3.509 1c-.31.788-1.343 1.126-1.857 1.75-.099.12-.147.12.023.12.18 0 .372.02.55-.007.318-.047.615-.217.908-.342.327-.138.672-.224.999-.361a3.84 3.84 0 0 0 .435-.211m0 0c.152-.088.294-.19.42-.316.01-.01.188-.184.137-.197-.084-.021-.322.296-.362.335-.063.061-.129.12-.195.178Zm0 0c-.21.182-.434.35-.65.526-.481.391-.99.745-1.464 1.146-.208.175-.469.304-.603.546-.047.084-.074.181-.154.241-.048.036-.354.246-.185.171 1.137-.5 2.062-1.389 3.19-1.89.263-.117.533-.23.802-.332.378-.144.693-.407 1.065-.556.115-.046.128.002.057.097-.23.31-.553.581-.844.831-1.115.959-2.316 1.77-3.512 2.614a7.742 7.742 0 0 0-1.01.861c-.038.039-.081.073-.113.118-.013.018.042-.02.06-.034.275-.214.538-.418.838-.6 1.59-.96 3.3-1.668 4.916-2.577.679-.381 1.509-.628 2.236-.905.127-.048.194-.177.311-.24.054-.03.136-.065.22-.105m0 0c.118-.056.239-.123.283-.197.072-.123-.19.111-.283.197Zm0 0-.032.03c-.34.379-.686.67-1.166.845-.453.164-.801.542-1.173.838-.953.757-1.817 1.515-2.634 2.42l-.045.049m0 0c-.591.643-1.257 1.16-1.986 1.64-.146.096-.238.252-.389.328-.1.05-.361.122-.422.197-.031.039-.206.077-.248.064-.02-.006.275-.288.275-.288.282-.247.594-.445.911-.644a27.81 27.81 0 0 0 1.859-1.297Zm0 0C5.874 5.152 7.056 4.24 8.428 3.62c1.034-.467 2.045-.958 3.127-1.294.354-.11.7-.314.995-.543.326-.253-.266.405-.302.436-.442.377-.961.61-1.48.858-.778.372-1.5.819-2.24 1.26-1.538.919-3.174 1.607-4.59 2.714-.344.269-.51.594-.791.932-.025.03-.05.06-.077.088m0 0a4.661 4.661 0 0 1-1.187.917c-.32.177-.06.04.138-.114l.02-.015c.34-.262.682-.527 1.03-.788Zm0 0c1.152-.865 2.355-1.689 3.67-2.253 1.218-.523 2.51-.837 3.695-1.441.604-.307 1.156-.712 1.773-.989.232-.104.462-.349.65-.519.151-.137.58-.52.785-.543.12-.013.583-.55.254-.13-.45.573-1.07 1.06-1.69 1.501m0 0c-.28.199-.56.388-.823.573-.64.447-1.285.851-1.942 1.222m2.764-1.795c1.382-.588 2.802-1.065 4.131-1.786.112-.061.456-.223.349-.155-.4.255-.807.777-1.086 1.146-.24.317-.37.696-.727.902-.876.504-1.919.555-2.765 1.146-1.493 1.042-3.159 1.633-4.821 2.302m4.92-3.555c-.288.123-.574.25-.857.385-.75.36-1.31.873-1.908 1.41m0 0a28.333 28.333 0 0 1-3.139 1.512c-.612.254-1.082.514-1.561.969-.565.536-1.17.917-1.826 1.33l-.01.007c-.367.23-.809.4-1.117.707-.18.18-.05.044.084-.057.434-.324.937-.56 1.414-.81A51.059 51.059 0 0 1 5.975 7.81c.435-.198.873-.38 1.312-.557m2.155-1.76c-.076.068-.152.137-.23.205-.546.484-1.138.913-1.702 1.374l-.223.181m0 0c-.96.771-1.95 1.483-2.874 2.3a4.243 4.243 0 0 0-.18.17m0 0c-.232.23-.454.483-.724.657-.113.072-.162.168-.255.258-.15.145-.432.222-.623.288-.335.116-.656.26-1.006.329-.144.028-.66.168-.623.14.511-.394 1.002-.725 1.602-.988a59.523 59.523 0 0 1 1.629-.684Zm0 0a97.435 97.435 0 0 1 3.35-1.27c1.646-.594 3.487-.85 4.887-1.964.622-.495 1.175-1.032 1.836-1.478.58-.391 1.167-.77 1.736-1.176.27-.192.613-.295.888-.51.021-.016.198-.11.171-.053-.132.274-.48.53-.697.717-.865.747-1.81 1.395-2.748 2.045-1.208.836-2.41 1.68-3.613 2.523-.47.33-.948.723-1.48.952-.155.066-.31.125-.467.18m0 0c-.227.08-.456.15-.687.214m.687-.214c-.23.07-.458.142-.687.214m.687-.214c.888-.272 1.78-.535 2.655-.854.32-.117.446-.232.7-.415.263-.19.571-.286.878-.376.552-.162 1.1-.42 1.615-.677.504-.252.911-.7 1.431-.911l.085-.035M7.41 9.903c-.968.272-1.96.454-2.88.893-.385.184-.771.348-1.162.519-.265.116-.588.185-.825.349-.3.208-.51.462-.837.643-.23.127-.478.303 0 .107 1.574-.644 3.012-1.566 4.618-2.144.36-.13.722-.25 1.085-.367Zm8.05-3.482c.255-.106.477-.207.692-.345m-.692.345c-.072.14-.145.278-.219.416m.22-.416.095-.186c.185-.364.262-1.091.68-1.3.443-.222.38.064.238.468-.083.241-.186.467-.322.673m0 0c.052-.033.104-.068.155-.106m-.155.106c-.01.015-.019.03-.029.043m.184-.149.05-.037c.115-.088.361-.329.06-.06l-.11.097Zm0 0-.096.084m0 0-.106.091m.106-.091-.088.065m.088-.065.093-.067c.204-.149-.248.443-.403.643-.41.533-.861 1.035-1.338 1.511m1.542-1.996c-.253.216-.511.424-.775.625m.775-.625.018-.026m-.018.026a2.265 2.265 0 0 1-.247.294 4.712 4.712 0 0 1-.718.59m.19-.259-.088.067m.088-.067-.105.099m.105-.099c.251-.23.522-.448.793-.65m-.882.717a18.395 18.395 0 0 1-3.046 1.857c-1.144.554-2.318 1.023-3.445 1.616-.582.305-1.142.545-1.743.797-.506.213-.937.52-1.414.784-.397.221-.834.382-1.253.557-.441.184-1.238.336-1.559.71-.217.254-.66.255-.901.496-.088.088.239-.067.358-.1a61.873 61.873 0 0 1 3.047-.777m9.956-5.94-.016.032m-9.94 5.908c1.516-.342 3.063-.622 4.567-1.034m-4.567 1.034c.22-.128.431-.266.63-.406.38-.268.703-.555 1.146-.72.546-.206 1.111-.351 1.662-.544 1.646-.575 3.31-1.21 4.85-2.04m-8.288 3.71c-.25.146-.507.277-.764.381-.432.175-.909.244-1.3.51-.223.15-.382.396-.587.57-.123.103-.411.266-.486.395-.129.22.482-.171.724-.255a32.91 32.91 0 0 1 3.378-.948m3.602-1.687c.817-.224 1.62-.487 2.4-.82.406-.174.881-.442 1.21-.754.175-.167.371-.27.576-.399.356-.223.654-.542.94-.848l.002-.003c.366-.392.738-.749 1.131-1.084m-6.259 3.908a22.615 22.615 0 0 0 3.721-2.675m-3.72 2.675c-.576.328-1.166.628-1.77.896-.53.235-1.382.365-1.833.791m9.861-5.595a14.812 14.812 0 0 1 1.097-.852m-1.097.852c.353-.226.708-.448 1.057-.675.272-.177.382-.354.215-.04-.09.168-.258.434-.423.529-.462.268-.907.822-1.24 1.22-.435.52-.822 1.082-1.233 1.622-.1.132-.446.368-.285.409.036.008.49-.32.573-.36.699-.318 1.34-.647 1.95-1.115.16-.122.899-.788.899-.235 0 .34-.064.679-.127 1.012-.109.568-.657.935-1.08 1.267-.176.14-.276.337-.482.463-.21.128-.402.324-.627.462-.28.172-.616.23-.901.399-.22.13-.379.262-.624.345-.255.086-.51.163-.766.23m3.094-5.533c-.664.425-1.32.865-1.919 1.375-.359.307.068-.412.124-.54l.013-.028m2.879-1.659c.301-.226.89-.709.677-.514-.208.191-.437.36-.677.514Zm0 0c-.41.265-.85.49-1.27.723-.543.3-1.073.624-1.609.936m0 0a30.945 30.945 0 0 1-.756.426m.756-.426c.075-.169.153-.336.234-.5m-.99.926a22.583 22.583 0 0 0 .99-.927M6.25 13.43c2.108-.482 4.364-.785 6.32-1.726.701-.337 1.318-.666 2.051-.939.635-.236 1.258-.415 1.857-.703.102-.05.199-.08.284-.13M6.25 13.43c-.032.03-.063.063-.09.097-.317.382-.713.797-1.02 1.244m11.622-4.838a.5.5 0 0 0 .161-.146c.055-.077-.051.035-.16.146Zm0 0a3.12 3.12 0 0 1-.15.145c-.757.652-1.661 1.155-2.524 1.646-1.675.954-3.409 1.744-5.246 2.298m0 0a21.34 21.34 0 0 1-.79.222c-.518.135-1.067.228-1.554.463-.507.243-1.058.375-1.615.495m3.96-1.18-.495.054c-1.104.125-2.164.375-3.208.695m3.702-.749c.391-.042.78-.083 1.166-.127m-5.125 1.307c-.573.123-1.15.234-1.69.443-.131.05-.248.048-.378.077-.032.007-.168.113-.181.107-.217-.087.36-.314.58-.395.64-.24 1.28-.465 1.926-.663m-.257.43c.073-.146.16-.29.257-.43m-.257.43a2.389 2.389 0 0 0-.155.383c-.033.111.129.073.188.064 1.219-.187 2.424-.703 3.566-1.15.509-.198 1.017-.403 1.526-.603m0 0c1.016-.117 2.015-.26 3.01-.526m-3.01.526c.664-.262 1.33-.516 2.006-.743.172-.058.328-.25.496-.269.265-.029.566-.225.828-.301.357-.104.718-.287 1.072-.376.075-.018-.08.136-.137.188a10.29 10.29 0 0 1-1.256.975m0 0a10.62 10.62 0 0 1-1.847.925m3.393-6.153c.184-.376.38-.744.577-1.113m0 0 .085-.159m-.085.16a9.813 9.813 0 0 1-.026.017c-.121.08-.243.181-.067 0 .057-.06.117-.119.178-.177m-4.055 7.425c-.403.16-.81.302-1.207.433-.481.157-.919.372-1.434.435a1.204 1.204 0 0 1-.133.008m2.774-.876c-.496.147-.99.292-1.472.45-.43.14-.862.303-1.302.426m2.774-.876c1.238-.367 2.49-.745 3.605-1.357.236-.13.441-.304.677-.429.286-.151.537-.364.835-.493.28-.121.274-.01.07.222-.789.895-2.08 1.446-3.123 1.96-.81.4-1.695.688-2.48 1.133-.126.071-.136.149-.225.238-.02.02-.157.102-.043.037.382-.22.77-.427 1.166-.62 1.225-.6 2.488-1.14 3.653-1.854.529-.323 1.03-.604 1.602-.837.785-.32-1.358 1.019-2.075 1.47a29.223 29.223 0 0 1-2.657 1.512c-.351.173-.755.33-1.066.577-.058.046.614-.27.724-.329 1.072-.573 2.162-1.05 3.277-1.528.473-.202.986-.426 1.401-.737.115-.086.202-.195.342-.242.416-.138-.4.404-.422.42-.138.1-.276.205-.414.312m-7.62 1.42c-.167.002-.338-.014-.485.067-.08.044-.175.083.027.043a6.02 6.02 0 0 0 .457-.11Zm7.62-1.42c-.552.429-1.11.889-1.707 1.219-.217.12.18-.16.204-.181a5.278 5.278 0 0 1 1.503-1.038Zm0 0a5.01 5.01 0 0 1 .313-.128c.444-.165.217.047-.044.256m0 0c-.146.116-.302.232-.358.28-.265.228-.51.474-.77.707-.04.035.252-.295.274-.315.252-.228.542-.47.854-.672Zm0 0c.296-.193.613-.35.936-.424.22-.05.135.057.02.161-.408.371-.862.696-1.294 1.039-.127.1-.253.202-.379.304m0 0c-.335.272-.67.544-1.015.802-.238.177.012-.033.044-.057.321-.25.634-.516.971-.745Zm0 0c.154-.104.313-.2.48-.284.059-.03.626-.305.596-.12-.044.274-.37.61-.355.87.001.02.252-.167.262-.174.122-.085.257-.145.388-.214.083-.044-.187.02-.281.02M6.042 4.137c-.214.064-.486.394-.653.52-.322.24-.87.474-1.09.83-.087.143-.298.138-.368.278m11.521-.904C14.21 5.3 13 5.832 11.76 6.28c-.281.103-1.075.503-.84.316.213-.171.412-.359.626-.53.505-.406 2.046-1.577 1.588-1.12-.19.191-.406.353-.596.544-.19.19-.28.338-.014.053.298-.32.75-.586.999-.938.213-.303.413-.568.663-.845.185-.204.36-.419.53-.636.117-.151-.378.11-.395.12-.575.31-1.078.683-1.703.892m2.654.784c-.316.234-.555.563-.85.824-.659.582-1.39 1.1-2.132 1.569-.38.24.007.033.16-.04.56-.266 1.037-.676 1.596-.952.594-.294 1.208-.552 1.81-.831.06-.029-.215.256-.242.281-.271.253-.885.66-.885 1.08"
    />
  </svg>
);

const Checkbox = ({ color }: { color?: string }) => {
  return (
    <div className="relative">
      <CheckboxSVG />
      <CheckboxMarkSVG
        className={cn("absolute top-0 left-1", `stroke-${color}`)}
      />
    </div>
  );
};

export const CheckboxGrid = ({
  count,
  tab,
}: {
  count: number;
  tab: string;
}) => {
  const isMonth = months.find((m) => m === tab);

  return (
    <div className="flex flex-wrap gap-2">
      {[...Array(count)].map((_, idx) => (
        <Checkbox
          key={idx}
          color={
            logsColors[isMonth ? "Month" : (tab as keyof typeof logsColors)][
              idx
            ]
          }
        />
      ))}
    </div>
  );
};

export default Checkbox;
