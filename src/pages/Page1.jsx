import Hero from "../components/Hero";

export default function Page1() {
  return (
    <>
      <Hero />
      
      {/* Extra height for scroll-based video */}
      <div style={{ height: "200vh", background: "#000" }}></div>
    </>
  );
}


const styles = {
  page: {
    height: "100vh",
    background: "#111",
    color: "white",
    padding: "60px",
  },
};
