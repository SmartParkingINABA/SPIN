import UserHeader from "../../components/user/UserHeader";
import UserSidebar from "../../components/user/UserSidebar";

export default function UserProfile() {
  return (
    <main className="flex font-ubuntu box-border">
      <UserSidebar />
      <div className="w-[83%] ml-auto">
        <UserHeader />
        <section className="bg-[#130F40] px-5 py-7 mt-16 h-[calc(100vh-64px)] overflow-y-auto">
          <h1 className="text-[#FEF8FD] text-2xl font-bold">Pengguna Akun</h1>
          <p className="text-[#93A3B6] font-medium mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            eveniet, velit odio sint laudantium deserunt similique laboriosam
            quo quaerat non consectetur quisquam quidem voluptatum quod dolorem
            itaque odit. Rerum velit vel obcaecati quidem! Velit dolorem
            sapiente sequi asperiores iusto cumque vitae dolores officia,
            voluptates repellendus soluta quo corrupti placeat, quod, iure
            maxime non. Nemo magnam molestias quae omnis est, soluta, sequi
            earum beatae blanditiis mollitia repudiandae provident cumque, eum
            praesentium illum consequatur voluptatem voluptate fugit ad
            accusamus optio? Provident labore, obcaecati assumenda quos soluta
            culpa vel quia aspernatur laborum repudiandae earum atque id
            voluptate qui autem et totam saepe ex!
          </p>
        </section>
      </div>
    </main>
  );
}
