import React from "react";
import useTitle from "../../Hook/UseTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <h1 className="text-5xl text-center text-gray-900 font-bold p-10">
        <span className="text-green-400">Welcome!</span> To Our Blog
      </h1>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-1 Difference between SQL and NoSQL
            </p>
            <p className="mt-2">
              <span className="text-xl font-bold">SQL</span> <br /> 1.RELATIONAL
              DATABASE MANAGEMENT SYSTEM (RDBMS) <br /> 2.These databases have
              fixed or static or predefined schema <br /> 3.These databases are
              not suited for hierarchical data storage. <br />
              4.These databases are best suited for complex queries <br />
              <span className="text-xl font-bold">NoSQL</span> <br />
              1. Non-relational or distributed database system. <br />
              2.They have dynamic schema <br />
              3. These databases are best suited for hierarchical data storage.
              <br />
              4.These databases are not so good for complex queries
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-2 What is JWT, and how does it work?
            </p>
            <p className="mt-2">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>

            <h1>How it works?</h1>
            <p>
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.{" "}
              <br></br> 1. User sign-in using username and password or
              google/facebook. <br></br> 2. Authentication server verifies the
              credentials and issues a jwt signed using either a secret salt or
              a private key. <br></br> 3. User's Client uses the JWT to access
              protected resources by passing the JWT in HTTP Authorization
              header. <br></br> 4. Resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-3 What is the difference between javascript and Node JS?
            </p>
            <p className="mt-2">
              Javascript: <br />
              Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
            </p>

            <p>
              NodeJS : <br /> NodeJS is a cross-platform and opensource
              Javascript runtime environment that allows the javascript to be
              run on the server-side. Nodejs allows Javascript code to run
              outside the browser. Nodejs comes with a lot of modules and mostly
              used in web development.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-4 How does Node JS handle multiple requests at the same time?
            </p>
            <p className="mt-2">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
