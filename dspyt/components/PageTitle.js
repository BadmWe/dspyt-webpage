export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl pb-2 font-extrabold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  );
}
