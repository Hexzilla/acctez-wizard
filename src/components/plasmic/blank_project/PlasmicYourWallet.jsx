// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 68wGqrWvUbUk9uG76N3xHk
// Component: VLILcNzR_Q
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: UzcYFC-NJii/component
import Button from "../../Button"; // plasmic-import: UCG438gq_ly/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 68wGqrWvUbUk9uG76N3xHk/projectcss
import sty from "./PlasmicYourWallet.module.css"; // plasmic-import: VLILcNzR_Q/css
import WizardSvgrepoComsvg2Icon from "./icons/PlasmicIcon__WizardSvgrepoComsvg2"; // plasmic-import: ppcK-LiUA7/icon
import screenShot20220619At70250PMpngCyEWdgYSm from "./images/screenShot20220619At70250PMpng.png"; // plasmic-import: cyEWdgYSm/picture

export const PlasmicYourWallet__VariantProps = new Array();

export const PlasmicYourWallet__ArgProps = new Array();

export const defaultYourWallet__Args = {};

function PlasmicYourWallet__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultYourWallet__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox___3Hk5Y)}>
            <div className={classNames(projectcss.all, sty.freeBox___9Aw5Q)}>
              <div className={classNames(projectcss.all, sty.freeBox__tVhb)}>
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Enter Your Tezos Wallet"}
                </h1>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5T3Ie
                  )}
                >
                  {
                    "AccTez wizard will guide you step-by-step through the setup p rocess "
                  }
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qf7Js
                  )}
                >
                  {"Enter Your Organization's Tezos Wallet Address"}
                </div>

                <TextInput
                  data-plasmic-name={"textInput"}
                  data-plasmic-override={overrides.textInput}
                  className={classNames("__wab_instance", sty.textInput)}
                />
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__khRc)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__cIn3W)}
                  color={"link"}
                >
                  {"Skip"}
                </Button>

                <div
                  className={classNames(projectcss.all, sty.freeBox__qjhTq)}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__zaPlg)}
                >
                  {"Back"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__hp3Mk)}
                >
                  {"Next"}
                </Button>
              </p.Stack>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__mVS)}>
              <WizardSvgrepoComsvg2Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__heiKw
                )}
              >
                {"AccTez Wizard"}
              </div>

              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: screenShot20220619At70250PMpngCyEWdgYSm,
                  fullWidth: 627,
                  fullHeight: 419,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1", "textInput", "textbox", "svg", "img"],
  h1: ["h1"],
  textInput: ["textInput", "textbox"],
  svg: ["svg"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicYourWallet__ArgProps,
      internalVariantPropNames: PlasmicYourWallet__VariantProps
    });

    return PlasmicYourWallet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicYourWallet";
  } else {
    func.displayName = `PlasmicYourWallet.${nodeName}`;
  }
  return func;
}

export const PlasmicYourWallet = Object.assign(
  // Top-level PlasmicYourWallet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    textInput: makeNodeComponent("textInput"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicYourWallet
    internalVariantProps: PlasmicYourWallet__VariantProps,
    internalArgProps: PlasmicYourWallet__ArgProps
  }
);

export default PlasmicYourWallet;
/* prettier-ignore-end */