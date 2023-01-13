import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubCard from "./pages/SubCard";
import Home from "./pages/Home";
import CategoryView from "./pages/CategoryView";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";
import { SidebarContext } from "./contexts/SidebarContext";
import { Layout } from "antd";
import Footer from "./components/footer";
import { LanguageContextProvider } from "./contexts/LanguageContext";

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    // <ThemeContext.Provider value={{ collapsed, setCollapsed }}>
    //   <SidebarContext.Provider value={{ toggled, setToggled }}>
    <LanguageContextProvider>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Layout className="containers">
            {/* <Sidebar /> */}
            <Layout className="glass-mophism">
              <Content className="site-layout">
                <Routes>
                  <Route path="/" element={<Home />} exact />
                  <Route path="/resource/:id" element={<SubCard />} />
                  <Route
                    path="/resource/category/:category_name"
                    element={<CategoryView />}
                  />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
        <Footer />
      </BrowserRouter>
    </LanguageContextProvider>
    //   </SidebarContext.Provider>
    // </ThemeContext.Provider>
  );
}

export default App;
