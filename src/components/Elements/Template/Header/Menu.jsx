import { useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";
import { useRouter } from "next/router";

export default function Menu({ id, name, company, type }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const NavigationOption = function (label, icon, address) {
    (this.label = (
      <span className="text-base text-primary-white font-light">{label}</span>
    )),
      (this.icon = (
        <div className="text-primary-yellow">
          <Icon icon={icon} width="24" />
        </div>
      ));

    this.address = address;
  };

  const navigation = [];

  const settings = new NavigationOption("Configurações", "bx:cog", "/settings");
  const logout = new NavigationOption("Sair", "bx:exit", "/logout");

  navigation.push(new NavigationOption("Home", "bx:home", `/?id=${id}`));

  const url = `/game/matches?id=${id}&name=${name}&company=${company}&type=${type}`;
  navigation.push(new NavigationOption("Copa", "bx:flag", url));
  navigation.push(
    new NavigationOption(
      "Ranking",
      "bx:football",
      `/game/ranking?company=${company}&type=${type}&game=1&id=${id}&name=${name}`
    )
  );

  const urlAwards = `/game/awards/?id=${id}&name=${name}&company=${company}&type=${type}`;
  navigation.push(new NavigationOption("Prêmios", "bx:trophy", urlAwards));

  return (
    <React.Fragment>
      <button onClick={() => setIsMenuOpen(true)}>
        <Icon icon="ic:round-menu" width="32" />
      </button>

      <div className={`menu ${isMenuOpen ? "isMenuOpen" : ""}`}>
        <div className="w-full h-full flex flex-col gap-8 bg-others-grey-1000 rounded-r-xl p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-white"
            >
              <Icon icon="ic:round-close" width="32" />
            </button>
          </div>
          <div className="flex-1 ">
            <nav className="flex flex-col gap-4">
              {navigation.map(function ({ label, icon, address }, index) {
                return (
                  <div
                    className="p-1 flex gap-4 items-center cursor-pointer"
                    key={`${label}-${index}`}
                    onClick={() => router.push(address)}
                  >
                    {icon}
                    {label}
                  </div>
                );
              })}
            </nav>
          </div>
          <div>
            <nav className="flex flex-col gap-4">
              <div
                className="p-1 flex gap-4 items-center cursor-pointer"
                onClick={() => router.push(settings.address)}
              >
                {settings.icon}
                {settings.label}
              </div>
              <div
                className="p-1 flex gap-4 items-center cursor-pointer"
                onClick={() => router.push(logout.address)}
              >
                {logout.icon}
                {logout.label}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
