import Age from "../Age";

export default {
  component: Age,
  title: "Components/Age"
}
const Template = (args) => <Age {...args} />;

export const Main = Template.bind({});
Main.args = {
  birthdate: "1990-12-05"
}

export const OneYear = Template.bind({});
const currentYear = new Date().getFullYear();
OneYear.args = {
  birthdate: currentYear-1 + "-01-01"
}

const d = new Date();
export const Months = Template.bind({});
d.setMonth(d.getMonth() - 3);
Months.args = {
  birthdate: d.toString()
}

export const SingleMonth = Template.bind({});
d.setMonth(new Date().getMonth() - 1);
SingleMonth.args = {
  birthdate: d.toString()
}