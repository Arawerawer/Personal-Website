import "@/styles/navigationCircles.scss";

interface NavigationCirclesProps {
  section?: string;
}

const NavigationCircles = ({ section }: NavigationCirclesProps) => {
  return (
    <div
      className={`nav-indicator ${
        section ? "bg-red bg-dark-yellow" : "bg-white"
      }`}
    >
      <div
        className={`nav-circle ${
          section === "home" ? "bg-red bg-dark-yellow " : "bg-white"
        }`}
      ></div>

      <div
        className={`nav-circle ${
          section === "services" ? "bg-red bg-dark-yellow" : "bg-white"
        }`}
      ></div>

      <div
        className={`nav-circle ${
          section === "contact" ? "bg-red bg-dark-yellow" : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default NavigationCircles;
