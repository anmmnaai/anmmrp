import warnings
import anmmrp.http


def application(environ, start_response):

    warnings.warn("The WSGI application entrypoint moved from "
                  "anmmrp.service.wsgi_server.application to anmmrp.http.root "
                  "in 15.3.",
                  DeprecationWarning, stacklevel=1)
    return anmmrp.http.root(environ, start_response)
