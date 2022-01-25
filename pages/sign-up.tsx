import Image from "next/image";
import SignUpForm from "../components/organisms/SignUpForm";

/* eslint-disable react/jsx-first-prop-new-line */
export default function SignUp() {
  return (
    <div>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <a className="navbar-brand" href="../index.html">
                <Image src="/icon/logo.png" height={60} width={60} alt="logo" />
              </a>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </div>
  );
}
