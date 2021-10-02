<script lang="ts">

    import {
      Collapse,
      Column,
      Col,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Row,
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
    } from 'sveltestrap';
    import PageProgress from "svelte-page-progress"
  
    let isOpen = false;
  
    const handleUpdate = (event) => {
      isOpen = event.detail.isOpen;
    }
    const setDarkMode = () => {
      document.body.setAttribute('id', 'darkmode');
      localStorage.setItem('theme', 'dark');
      document.getElementById("color-theme").setAttribute("content", "#1a202c");
    }
    const setLightMode = () => {
      document.body.setAttribute('id', '');
      localStorage.removeItem('theme');
      document.getElementById("color-theme").setAttribute("content", "#FFFFFF");
    }
    if (localStorage.getItem('theme') == 'dark') {
      setDarkMode();
    } else {
      setLightMode();
    }
  </script>
  
  <PageProgress color="#db34eb" heigh="1vh" />
  <Navbar class="nav shadow-sm fixed-top" light expand="md">
    <NavbarBrand href="/"><Column><Row><Col>湊あくあ</Col></Row></Column></NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} aria-label="Toggle Navbar" />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/overview">Overview</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/info">Information</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/links">Links</NavLink>
      </NavItem>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Mode</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem on:click={setDarkMode}><i class="fas fa-moon"></i> Dark</DropdownItem>
            <DropdownItem on:click={setLightMode}><i class="fas fa-sun"></i> Light</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  </Navbar>