import science.canonn.edrp._
import org.scalatra._
import javax.servlet.ServletContext

class ScalatraBootstrap extends LifeCycle {

  override def init(context: ServletContext) {

    //Store.loadSystems()
    //Store.loadBodies()
    //Store.getPath(3065, 1000, 1200, 2000000, 200)

    // bootstrap scalatra
    Store.systemCache.refresh((1000,20000,2000000))
    context.mount(new EdrpSrv, "/*")

  }
}
