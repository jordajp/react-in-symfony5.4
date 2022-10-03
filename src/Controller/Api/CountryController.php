<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Path;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/", name="api_")
 */
class CountryController extends AbstractController
{

    /**
     * @Route("countries", name="countries")
     * @return void
     */
    public function countries(): JsonResponse
    {
        $projectRoot = $this->getParameter('kernel.project_dir');
        $rawJson = file_get_contents(Path::canonicalize("$projectRoot/country-list-fr.json"));
        return JsonResponse::fromJsonString($rawJson);
    }
}