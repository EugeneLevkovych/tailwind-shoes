export default function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} relative max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-9">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img
        className="absolute left-[40%] top-5 h-40 w-56"
        src={item.src}
        alt="Nike-1"
      />
    </div>
  );
}
