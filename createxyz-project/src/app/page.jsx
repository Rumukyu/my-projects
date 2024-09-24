"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("ホーム");
  const [activeSidebar, setActiveSidebar] = React.useState(null);
  const [userInput, setUserInput] = React.useState("");
  const [graphData, setGraphData] = React.useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const renderGraph = () => {
    if (graphData.length === 0) return null;
    const maxValue = Math.max(...graphData);
    return (
      <div className="mt-4 flex space-x-2">
        {graphData.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
              style={{
                height: `${(value / maxValue) * 100}%`,
                width: "40px",
              }}
            />
            <span className="text-sm mt-1">{value}</span>
          </div>
        ))}
      </div>
    );
  };

  const handleGenerateGraph = () => {
    const values = userInput.split(",").map((value) => Number(value.trim()));
    setGraphData(values);
  };

  const renderContent = () => {
    if (activeTab === "ホーム") {
      return (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-10 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-6">
            AIマーケティングツールへようこそ
          </h1>
          <p className="text-xl mb-8">
            最新のAI技術を活用して、あなたのマーケティング戦略を最適化します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-4">リアルタイム分析</h3>
              <p>
                データをリアルタイムで分析し、即座にアクションを起こせます。
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-4">AI生成コンテンツ</h3>
              <p>AIが最適なマーケティングコンテンツを自動生成します。</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-4">ユーザー行動予測</h3>
              <p>AIが顧客の行動を予測し、効果的な戦略を提案します。</p>
            </div>
          </div>
          <button
            className="mt-10 px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-100 transition duration-300"
            onClick={() => {
              setActiveTab("料金プラン");
              setActiveSidebar(null);
            }}
          >
            今すぐ始める
          </button>
        </div>
      );
    }

    if (activeTab === "ダッシュボード") {
      return (
        <div className="bg-white p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6">ダッシュボード</h2>
          <p className="text-lg mb-4">ビジネスの進捗を一目で確認できます。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">売上状況</h3>
              <p>売上データの概要を確認しましょう。</p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">キャンペーン効果</h3>
              <p>現在のマーケティングキャンペーンの成果を確認します。</p>
            </div>
            <div className="bg-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">顧客フィードバック</h3>
              <p>顧客の声を集め、サービス向上に活かします。</p>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "料金プラン") {
      return (
        <div className="bg-white p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6">料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-lg mb-4">¥0/月</p>
              <ul className="text-left mb-4">
                <li>- 基本分析機能</li>
                <li>- 小規模プロジェクト向け</li>
              </ul>
            </div>
            <div className="bg-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Normal</h3>
              <p className="text-lg mb-4">¥1500/月</p>
              <ul className="text-left mb-4">
                <li>- すべての分析機能</li>
                <li>- 中規模プロジェクト向け</li>
                <li>- AIコンテンツ生成</li>
              </ul>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-lg mb-4">¥3000/月</p>
              <ul className="text-left mb-4">
                <li>- すべての機能</li>
                <li>- 大規模プロジェクト向け</li>
                <li>- 専用サポート</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (activeSidebar) {
      switch (activeSidebar) {
        case "カスタマイズ":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                カスタマイズダッシュボード
              </h2>
              <p className="text-gray-600">
                ダッシュボードを自由にカスタマイズできます。
              </p>
            </div>
          );
        case "リアルタイム分析":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">リアルタイム分析</h2>
              <p className="text-gray-600">
                入力された数値をもとに棒グラフを生成します。
              </p>
              <input
                type="text"
                className="border p-2 mt-4 w-full rounded-md"
                placeholder="数値をカンマで区切って入力してください (例: 1,2,3)"
                value={userInput}
                onChange={handleInputChange}
              />
              <button
                className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition duration-300"
                onClick={handleGenerateGraph}
              >
                グラフを生成
              </button>
              {renderGraph()}
            </div>
          );
        case "ローカル戦略":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">ローカル戦略</h2>
              <p className="text-gray-600">地域に特化した戦略を提案します。</p>
            </div>
          );
        case "AI生成コンテンツ":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">AIコンテンツ生成</h2>
              <p className="text-gray-600">
                AIが生成するコンテンツを活用しましょう。
              </p>
            </div>
          );
        case "ユーザー予測":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">ユーザー行動予測</h2>
              <p className="text-gray-600">
                顧客の行動を予測するためのデータを入力してください。
              </p>
              <input
                type="text"
                className="border p-2 mt-4 w-full rounded-md"
                placeholder="数値をカンマで区切って入力してください (例: 1,2,3)"
                value={userInput}
                onChange={handleInputChange}
              />
              <button
                className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition duration-300"
                onClick={handleGenerateGraph}
              >
                グラフを生成
              </button>
              {renderGraph()}
            </div>
          );
        case "教育リソース":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">教育リソース</h2>
              <p className="text-gray-600">
                AI学習のためのリソースを提供します。
              </p>
            </div>
          );
        case "料金プラン":
          return (
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">料金プラン</h2>
              <p className="text-gray-600">適切なプランを選択してください。</p>
            </div>
          );
        default:
          return null;
      }
    }

    return null;
  };

  return (
    <div className="font-roboto min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center p-4 shadow-lg">
        <div className="text-2xl font-bold">AIマーケティングツール</div>
        <ul className="flex space-x-6">
          {[
            "ホーム",
            "ダッシュボード",
            "競合分析",
            "AI生成",
            "学習",
            "コミュニティ",
          ].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer transition hover:text-blue-200 ${
                activeTab === tab
                  ? "text-blue-200 border-b-2 border-blue-200"
                  : ""
              }`}
              onClick={() => {
                setActiveTab(tab);
                setActiveSidebar(null);
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
            ログイン
          </button>
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300">
            新規登録
          </button>
        </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[250px] bg-gradient-to-b from-blue-800 to-purple-800 text-white p-6 hidden md:block shadow-lg overflow-y-auto">
          <ul>
            {[
              "カスタマイズ",
              "リアルタイム分析",
              "ローカル戦略",
              "AI生成コンテンツ",
              "ユーザー予測",
              "教育リソース",
              "料金プラン",
            ].map((item) => (
              <li
                key={item}
                className="mb-6 cursor-pointer transition hover:text-blue-300"
                onClick={() => setActiveSidebar(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}

export default MainComponent;