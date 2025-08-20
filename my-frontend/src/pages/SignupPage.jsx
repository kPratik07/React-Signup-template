import SignupForm from "../components/SignupForm";
import MailingList from "../components/MailingList";

export default function SignupPage() {
  return (
    <main className="flex-grow">
      {/* Signup Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SignupForm />
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <MailingList />
        </div>
      </section>
    </main>
  );
}
