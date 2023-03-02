const baseUrl = "https://www.boredapi.com/api/activity";

export default function url(props) {
  const { accessibility, type, price, participants } = props;
  return `${baseUrl}?minprice=${price[0]}&maxprice=${price[1]}&minaccessibility=${accessibility[0]}&maxaccessibility=${accessibility[1]}&type=${type}&participants=${participants}`;
}
