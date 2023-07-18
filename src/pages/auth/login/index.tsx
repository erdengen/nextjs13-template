import Layout from "@/src/components/layout/Layout";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <Layout>
        <div className="mx-auto w-full px-2 lg:px-10 min-h-[400px] flex flex-col lg:flex-row gap-5 items-start justify-center">
          <div className="w-full flex flex-col">
            <h5 className="flex justify-center w-full text-center text-xl border-b border-black">
              <span className="px-5 py-1">Üye Girişi</span>
            </h5>
            <div className="w-full text-center text-sm my-5 py-5 flex flex-col gap-y-3 md:px-10 ">
              <div>
                <input
                  type="email"
                  className="form-input w-full"
                  placeholder="E-Posta yazınız"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-input w-full"
                  placeholder="Şifre yazınız"
                />
              </div>
              <div className="flex flex-row items-center">
                <div className="flex items-center pl-3 w-full">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ml-2 text-left  text-sm font-medium "
                  >
                    Beni Hatırla!
                  </label>
                </div>
                <div className="w-full text-right">Şifrenizi mi unuttunuz?</div>
              </div>
              <div>
                <input
                  type="button"
                  value={"Giriş Yap"}
                  className="py-3 text-white bg-black w-full rounded border border-transparent hover:bg-white hover:text-black hover:border-black"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h5 className="flex justify-center w-full text-center text-xl border-b border-black">
              <span className="px-5 py-1">Üye Ol</span>
            </h5>
            <div className="w-full text-center text-sm my-5 py-5 flex flex-col gap-y-3 md:px-10">
              <div>
                <input
                  type="email"
                  className="form-input w-full"
                  placeholder="E-Posta yazınız"
                />
              </div>
              <div>
                <input
                  type="phone"
                  name="phone"
                  className="form-input w-full"
                  placeholder="Telefon yazınız"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-input w-full"
                  placeholder="Şifre yazınız"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-input w-full"
                  placeholder="Şifre Tekrarı"
                />
              </div>
              <div className="flex items-center  justify-start gap-10">
                <span>Cinsiyet</span>
                <div>
                  <input
                    id="gender"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2"
                  />
                  <label
                    htmlFor="gender"
                    className="w-full py-3 ml-2 text-left  text-sm font-medium "
                  >
                    Erkek
                  </label>
                </div>
                <div>
                  <input
                    id="gender"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2"
                  />
                  <label
                    htmlFor="gender"
                    className="w-full py-3 ml-2 text-left  text-sm font-medium "
                  >
                    Kadın
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-center mt-5 border-t border-stone-500">
                <div className="flex items-center  w-full">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ml-2 text-left  text-sm font-medium "
                  >
                    Kampanya ve duyurulardan Eposta ile haberdar olmak
                    istiyorum.
                  </label>
                </div>
                <div className="flex items-center  w-full">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ml-2 text-left  text-sm font-medium "
                  >
                    Kampanya ve duyurulardan Eposta ile haberdar olmak
                    istiyorum.
                  </label>
                </div>
                <div className="flex items-center  w-full">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ml-2 text-left  text-sm font-medium "
                  >
                    Kampanya ve duyurulardan Eposta ile haberdar olmak
                    istiyorum.
                  </label>
                </div>
              </div>
              <div>
                <input
                  type="button"
                  value={"Üye Ol"}
                  className="py-3 text-white bg-black w-full rounded border border-transparent hover:bg-white hover:text-black hover:border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
