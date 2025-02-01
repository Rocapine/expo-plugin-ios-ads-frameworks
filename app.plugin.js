const { withXcodeProject } = require("@expo/config-plugins");

const REQUIRED_FRAMEWORKS = [
  "AdSupport.framework",
  "AdServices.framework",
  "StoreKit.framework",
  "AppTrackingTransparency.framework",
];

const addFrameworkToProject = (xcodeProject, framework) => {
  const frameworksGroup = xcodeProject.pbxGroupByName("Frameworks");
  const hasFramework = frameworksGroup.children.some(
    (child) => child.comment === framework
  );
  if (!hasFramework) {
    xcodeProject.addFramework(framework);
  }
};

const withIOSFrameworks = (config, pluginConfig) => {
  const FRAMEWORKS = pluginConfig?.REQUIRED_FRAMEWORKS || REQUIRED_FRAMEWORKS;
  return withXcodeProject(config, (config) => {
    const xcodeProject = config.modResults;

    // Add StoreKit.framework to the project
    FRAMEWORKS.forEach((framework) => {
      addFrameworkToProject(xcodeProject, framework);
    });
    return config;
  });
};

module.exports = withIOSFrameworks;
