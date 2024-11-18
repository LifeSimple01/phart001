import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <div className="bg-[#987185] font-sans min-h-screen">
      <div className="flex justify-between items-center p-4 bg-[#423736]">
        <div className="text-[#D6AA9F] font-bold text-lg">
          <a href="#">MY WEBSITE</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.facebook.com/satriangthong"
              className="text-[#D6AA9F]"
            >
              SATRI-ANGTHONG
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/comscisa"
              className="text-[#D6AA9F]"
            >
              COMSCI-GEN-4
            </a>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#D6AA9F]">
        <div className="bg-[#E9D5B7] p-6 rounded-lg">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">MY PROFILE</h2>
          <img
            src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/p/672cdcc33c0e6.png"
            alt="Profile Picture"
            className="w-full max-w-[200px] rounded-lg mb-4"
          />
          <p className="text-[#1a1a1a]">
            <strong>ญาณภัทร จำนงค์สุทธิ์</strong>
            <br />
            ม.6/12 เลขที่ 9
            <br />
            วิทย์-คอม สตรีอ่างทอง Gen 4
          </p>
          <p className="text-[#1a1a1a] mt-2">
            FB: Yarnnaphart Chamnongsooth
            <br />
            IG: life_simple001
            <br />
            Line: phart1234
            <br />
            Phone: 063-1633783
          </p>
        </div>
        <div className="bg-[#E9D5B7] p-6 rounded-lg">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">ABOUT ME</h2>
          <p className="text-[#1a1a1a]">
            หวัดดีค้าบบบบบบบบ อยู่จนจะจบม.6เเล้วค้าบบบบบบไม่รู้จะเขียนไรดีค้าบบบบบ
          </p>
        </div>
        <div className="bg-[#E9D5B7] p-6 rounded-lg">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">MY PROJECT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-gray-800 rounded-lg p-4 text-center text-[#1a1a1a] font-bold">
              <img
                src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/p/672e1bef6f3a8.png"
                alt="Sand Block"
                className="w-full mb-2"
              />
              SAND BLOCK
            </div>
            <div className="bg-white border-2 border-gray-800 rounded-lg p-4 text-center text-[#1a1a1a] font-bold">
              <img
                src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/p/672e1cfa7f177.png"
                alt="GubGuru"
                className="w-full mb-2"
              />
              GUBGURU
            </div>
            <div className="bg-white border-2 border-gray-800 rounded-lg p-4 text-center text-[#1a1a1a] font-bold">
              <img
                src="http://app.sa.ac.th/gubguru/pages/registerseller/uploads/p/672e1bf61017d.png"
                alt="Check Stu"
                className="w-full mb-2"
              />
              CHECK-STU
            </div>
          </div>
        </div>
        <div className="bg-[#E9D5B7] p-6 rounded-lg">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Project Info</h2>
          <ul className="space-y-4">
            <li>
              <p className="font-bold text-[#1a1a1a]">SANDBLOCK:</p>
              <p className="text-[#1a1a1a]">
                เป็นเกมส่งเสริมและพัฒนาในด้านความคิดสร้างสรรค์ และ
                จินตนาการให้กับเด็กๆ โดยเป็นการผสมผสานระหว่าง Block Game ในรูปแบบ Tangram
                เข้ากับเกมแนว Sandbox
              </p>
            </li>
            <li>
              <p className="font-bold text-[#1a1a1a]">GUBGURU:</p>
              <p className="text-[#1a1a1a]">
                ถูกพัฒนาขึ้นมา
                เพื่อลดปัญหาการใช้จ่ายไม่เพียงพอในแต่ละครัวเรือนในชุมชน โดยมีรูปแบบเป็นระบบเว็บแอปพลิเคชัน
                ที่จะช่วยจัดสรรงบประมาณการใช้ จ่ายเงินในการซื้อวัตถุดิบหรือสินค้าในการบริโภคในแต่ละเดือนตามเงื่อนไขที่กำหนด
              </p>
            </li>
            <li>
              <p className="font-bold text-[#1a1a1a]">CHECK-STU:</p>
              <p className="text-[#1a1a1a]">
                เป็นแอพพลิเคชั่นช่วยอำนวยความสะดวกในการตรวจสอบเช็คชื่อนักเรียน
                ที่มีจุดเด่นที่การใช้ระบบ GPS ในการตรวจสอบวัดระยะห่างระหว่างครูกับนักเรียน
              </p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="bg-[#423736] text-[#D6AA9F] p-4 text-center">
        <p>Coppyright 2024 Made by Yarnnaphart</p>
      </footer>
    </div>
  );
}
