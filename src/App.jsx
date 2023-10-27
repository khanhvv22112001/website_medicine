import CoreConcepts from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES1 } from "./data";
import React, { useState } from "react";
const App = () => {
  const [selected, setSelected] = useState("components");
  const handleSelect = (selectButton) => {
    setSelected(selectButton);
  };
  let tabSelect = <p></p>;
  if (selected) {
    tabSelect = (
      <div id="tab-content">
        <img src={EXAMPLES1[selected].image} alt="" />
        {/* <h3>{EXAMPLES1[selected].title}</h3> */}
        <p>{EXAMPLES1[selected].description}</p>
        <pre></pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Sản phẩm bán chạy</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Bệnh</h2>
          <menu>
            <TabButton
              isSelected={selected === "components"}
              onSelect={() => handleSelect("components")}
            >
              Sốt xuất huyết
            </TabButton>
            <TabButton
              isSelected={selected === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              Bệnh tay, chân, miệng
            </TabButton>
            <TabButton
              isSelected={selected === "props"}
              onSelect={() => handleSelect("props")}
            >
              Ebola
            </TabButton>
          </menu>
          {tabSelect}
        </section>
      </main>
    </div>
  );
};

export default App;
