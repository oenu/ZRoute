{
  description = "ZRoute development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
    in
    {
      devShells = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          jdk = pkgs.temurin-bin-25;
        in
        {
          default = pkgs.mkShell {
            buildInputs = [
              jdk
              pkgs.gradle
              pkgs.nodejs_24
              pkgs.pnpm
            ];

            shellHook = ''
              export JAVA_HOME="${jdk}"
            '';
          };
        });
    };
}
