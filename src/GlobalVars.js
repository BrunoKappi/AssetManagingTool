
export const DefaultLoggedUser = {
  Email: '',
  uid: '',
  SidebarActive: true,
  CurrentSidebarTab: "Login",
  Search: '',
  Name: '',
  Role: '',
  CheckedLogin: false
};








export const UserModalSelectcustomStyles = {
  option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'var(--ComplementaryColor)' : provided.backgroundColor,
      ':hover': {
          backgroundColor: 'var(--ComplementaryColor)',
          color: 'var(--PrimaryColor)'
      }
  }),
  input: (provided) => ({
      ...provided,
      border: 'none',
      outline: 'none'
  }),
  control: (provided, state) => ({
      ...provided,
      borderRadius: '.5rem',
      boxShadow: state.isFocused ? 'none' : 'none',
      border: state.isFocused ? '1px solid var(--PrimaryBackGroundFaded50)' : '1px solid var(--PrimaryBackGroundFaded50)'
  }),
};










export const Filteroptions = [
  { value: "Mais recentes", label: "Mais Recentes" },
  { value: "Mais antigos", label: "Mais antigos" },
  { value: "Status", label: "Status" },
  { value: "Descrição", label: "Descrição" },
];
export const FilterStatusoptions = [
  { value: "Todos", label: "Todos" },
  { value: "Aberto", label: "Aberto" },
  { value: "Em Andamento", label: "Em andamento" },
  { value: "Concluído", label: "Concluído" },
];