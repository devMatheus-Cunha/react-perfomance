# Pai para filho

  <Pai>
    <Filho>
  </Pai>

---

# Propriedades

  <Pai>
    <Filho title="" >
  </Pai>

---

# Hooks (useState, useContext, useReducer...)

```tsx
  function Component() {
    const [state, setState] = useState()
    return (
      ...
    );
  }
```

---

# Fluxo de renderização

1. Gerar uma nova versão do componente que precisa ser rendenrizado.
2. Comparar essa nova versão com a versão anterior ja salva na pagina.
3. Se houverem alterações, o React "rendenriza" essa nova versão em tela.
