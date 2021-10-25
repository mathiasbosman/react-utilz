import Copyright from "../Copyright";

export default {
  component: Copyright,
  title: "Components/Copyright"
}

const Template = (args) => <Copyright {...args} />;

export const Main = Template.bind({});
Main.args = {
  name: "John Doe"
}