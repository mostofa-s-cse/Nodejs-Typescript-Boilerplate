import express from "express";

import RoleController from "../controllers/RoleController";
import UserController from "../controllers/UserController";
import MasterMenuController from "../controllers/MasterMenuController";
import SubmenuController from "../controllers/SubmenuController";
import RoleMenuAccessController from "../controllers/RoleMenuAccessController";

import UserValidation from "../middleware/validation/UserValidation";
import Authorization from "../middleware/Authorization";
import MenuValidation from "../middleware/validation/MenuValidation";

const router = express.Router();

// User Routing
router.post("/api/user/signup", UserValidation.RegisterValidation, UserController.Register); //http://localhost:5000/api/user/signup
router.post("/api/user/login", UserController.UserLogin);
router.get("/api/user/refresh-token", UserController.RefreshToken);
router.get("/api/user/current-user", Authorization.Authenticated, UserController.UserDetail);
router.get("/api/user/logout", Authorization.Authenticated, UserController.UserLogout);

// Master Menu Routing
router.get("/api/role", Authorization.Authenticated, RoleController.GetRole);
router.post("/api/role",Authorization.Authenticated, Authorization.AdminRole, RoleController.CreateRole);
router.post("/api/role/:id",Authorization.Authenticated, Authorization.AdminRole, RoleController.UpdateRole);
router.delete("/api/role/:id", Authorization.Authenticated, Authorization.SuperUser , RoleController.DeleteRole);
router.get("/api/role/:id",Authorization.Authenticated, RoleController.GetRoleById);

// Master Menu Routing
router.post("/api/menu", MenuValidation.CreateMenuValidation, Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.CreateMenu);
router.get("/api/menu", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.GetListMenu);
router.get("/api/menu/get/all", Authorization.Authenticated, Authorization.SuperUser, MasterMenuController.GetAllMenu);
router.get("/api/menu/:id", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.GetDetailMenu);
router.patch("/api/menu/:id", MenuValidation.CreateMenuValidation, Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.UpdateMenu);
router.delete("/api/menu/:id", Authorization.Authenticated, Authorization.AdminRole, MasterMenuController.SoftDeleteMenu);
router.delete("/api/menu/permanent/:id", Authorization.Authenticated, Authorization.SuperUser, MasterMenuController.DeletePermanent);

// Submenu routing
router.post("/api/sub-menu", MenuValidation.CreateSubmenuValidation, Authorization.Authenticated, Authorization.AdminRole, SubmenuController.CreateSubmenu);
router.get("/api/sub-menu", Authorization.Authenticated, Authorization.AdminRole, SubmenuController.GetListSubmenu);
router.get("/api/sub-menu/get/all", Authorization.Authenticated, Authorization.SuperUser, SubmenuController.GetAllSubmenu);
router.get("/api/sub-menu/:id", Authorization.Authenticated, Authorization.AdminRole, SubmenuController.GetDetailSubmenu);
router.patch("/api/sub-menu/:id", MenuValidation.CreateSubmenuValidation, Authorization.Authenticated, Authorization.AdminRole, SubmenuController.UpdateSubmenu);
router.delete("/api/sub-menu/:id", Authorization.Authenticated, Authorization.AdminRole, SubmenuController.SoftDelete);
router.delete("/api/sub-menu/permanent/:id", Authorization.Authenticated, Authorization.SuperUser, SubmenuController.DeletePermanent);

// Role Menu Access
router.post("/api/role-menu-access", MenuValidation.CreateRoleMenuAccess , Authorization.Authenticated, Authorization.SuperUser, RoleMenuAccessController.CreateAccess);
router.get("/api/role-menu-access", Authorization.Authenticated, Authorization.SuperUser, RoleMenuAccessController.GetList);
router.get("/api/role-menu-access/get/all", Authorization.Authenticated, Authorization.SuperUser, RoleMenuAccessController.GetAll);
router.get("/api/role-menu-access/:id", Authorization.Authenticated, Authorization.SuperUser, RoleMenuAccessController.GetDetail);
router.patch("/api/role-menu-access/:id", MenuValidation.CreateRoleMenuAccess, Authorization.Authenticated, Authorization.SuperUser, RoleMenuAccessController.UpdateAccess);
router.delete("/api/role-menu-access/:id", Authorization.Authenticated, Authorization.SuperUser, RoleMenuAccessController.SoftDelete);

export default router;